import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";

interface Character {
  id: string;
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
}

interface CharacterPageProps {
  character: Character;
}

const CharacterPage: React.FC<CharacterPageProps> = ({ character }) => {
  return (
    <div>
      <h1>{character.name}</h1>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Hair Color: {character.hairColor}</p>
      <p>Skin Color: {character.skinColor}</p>
      <p>Eye Color: {character.eyeColor}</p>
      <p>Birth Year: {character.birthYear}</p>
      <Link
        href="/dynamic-blog"
        className="text-blue-500 hover:underline mt-4 block"
      >
        Back to Characters
      </Link>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${params?.id}/`);
    const data = await response.json();
    if (!data || data.detail === "Not found") {
      return {
        notFound: true,
      };
    }

    const character: Character = {
      id: data?.name.toLowerCase().replace(/ /g, "-"),
      name: data?.name,
      height: data?.height,
      mass: data?.mass,
      hairColor: data?.hair_color,
      skinColor: data?.skin_color,
      eyeColor: data?.eye_color,
      birthYear: data?.birth_year,
    };

    return { props: { character } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
};

export default CharacterPage;
