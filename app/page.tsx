import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
        alt={"Star Wars logo..."}
        width={500}
        height={400}
      />
      <div>
        <h1>Welcome to the Home Page!</h1>
      </div>
      <div className="mt-4">
        <Link href="/static-blog" className="text-blue-500 hover:underline">
          Static Blog Page
        </Link>
        <span className="mx-2">|</span>
        <Link href="/dynamic-blog" className="text-blue-500 hover:underline">
          Dynamic Blog Page
        </Link>
      </div>
    </main>
  );
};

export default Home;
