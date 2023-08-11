import { GetStaticProps } from "next";
import Link from "next/link";

interface Character {
  id: string;
  name: string;
  height: string;
}

interface DynamicBlogProps {
  characters: Character[];
}

const DynamicBlog: React.FC<DynamicBlogProps> = ({ characters }) => {
  return (
    <div>
      <h1>Star Wars Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link href={`/dynamic-blog/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/people");
    const data = await response.json();

    const characters = data.results
      .filter((result: any) => result.name)
      .map((result: any, index: number) => ({
        id: index + 1,
        name: result.name,
        height: result.height,
      }));

    return { props: { characters } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { characters: [] } };
  }
};

export default DynamicBlog;
