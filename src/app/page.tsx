import CountdownTimer from "@/components/CountdownTimer";
import Posts from "@/components/Posts";
import UserList, { User } from "@/components/UserList";

const users: User[] = [
  { id: 1, name: "John Smith", email: "john@example.com", role: "Developer" },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "Designer",
  },
  { id: 3, name: "Mike Wilson", email: "mike@example.com", role: "Manager" },
  { id: 4, name: "Emma Davis", email: "emma@example.com", role: "Developer" },
  { id: 5, name: "Tom Brown", email: "tom@example.com", role: "Designer" },
];

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-6 p-6">
        <section>
          <p>Task #1</p>
          <Posts />
        </section>
        <section>
          <p>Task #2</p>
          <UserList users={users} />
        </section>
        <section>
          <p>Task #3</p>
          <CountdownTimer />
        </section>
      </main>
    </div>
  );
}
