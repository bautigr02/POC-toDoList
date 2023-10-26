import { getAllTodos } from '@/api';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">ToDo App</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  )
}
/* dependencias usadas: 
pnpm run dev (para correr en localhost:3000)
npm run json-server (para correr la API en localhost:3001)
npm install uuid (para generar ids unicos)
npm i --save-dev @types/uuid (Para que typescript reconozca el paquete uuid)
*/