import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#87A2FF",
        fontSize: "x-large",
        textAlign: "center",
        height: "100%",
        position: "relative",
      }}
    >
      <Link
        href="/login"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Giriş yapmak için tıkla
      </Link>
    </div>
  );
}
