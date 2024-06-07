import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "New Remix App" },
  ];
};

export default function RootPage() {
  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
      className="flex flex-col text-sm min-h-screen w-full"
    >
      <p>Hello REMIX</p>
    </div>
  );
}
