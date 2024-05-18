import Link from "next/link";

export default function Custom404() {
  return (
    <div>
      <div>
        <p>Didn&apos;t find what you were looking for?</p>
        <Link href="/">
          <button>Return Home</button>
        </Link>
      </div>
    </div>
  );
}
