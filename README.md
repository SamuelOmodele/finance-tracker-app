FinanceTrack

Live Demo:
https://finance-tracker-app-henna-chi.vercel.app/

This README contains:
- Project Explanation
- Guide to Running the Project

------------------
(1) PROJECT EXPLANATION 
------------------

What I Built:

I built FinanceTrack, a simple personal finance dashboard that allows users to:

- Add and track transactions
- Categorize expenses (Food, Transport, Entertainment, Shopping)
- View spending analytics using charts
- Monitor spending against a monthly budget
- View transaction history
- Reset data and start fresh

The application stores data in localStorage, which allows users to persist their transactions without requiring a backend.

------------------
KEY DESIGN CHOICES
------------------

- Next.js (App Router): I used Next.js because it provides a structured way to build modern React applications, with support for server and client components.

- React Context for State Management: Finance data (transactions, budget, etc.) is managed using a context provider. This allows different parts of the app (dashboard, analytics, tables) to access the same data without prop drilling.

- LocalStorage for Persistence: Since the project does not require a backend, localStorage was used to store finance data and transactions so that the data persists across page refreshes.

- Recharts for Data Visualization: Recharts was used to implement the analytics charts because it integrates well with React and allows responsive chart components.

- Tailwind CSS for Styling: Tailwind CSS was used to quickly build a clean and responsive UI while keeping styling consistent across components.


------------------------------------
WHAT I WOULD IMPROVE WITH TIME
------------------------------------

If given more time, I would improve the application by:
- Implementing category-specific budgets instead of only a global monthly budget.
- Adding edit and delete functionality for transactions.
- Improving the analytics section with more chart types and insights.
- Improving the mobile design.

---------------
CHALLENGES FACED
---------------

The major challenge I faced was Managing the global application state for finance data while keeping components clean. This was addressed by using React Context, which allowed shared state to be accessed across different components without excessive prop drilling.

---------------
TIME SPENT
---------------
Approximately 15 hours were spent building this project, including:



------------------------------------
(2) GUIDE TO RUNNING THE PROJECT
------------------------------------

FinanceTrack is a personal finance dashboard that helps users track their transactions, monitor spending across categories, and visualize financial activity.

Built with Next.js (App Router) and React.

---------------
Getting Started
---------------

Follow these steps to run the project locally.

1. Clone the repository
git clone https://github.com/your-username/finance-track.git

Then navigate into the project folder:

cd finance-track
2. Install dependencies

Using npm (recommended)

npm install

or using pnpm

pnpm install

or using yarn

yarn
3. Start the development server

Run:

npm run dev

or

pnpm dev

or

yarn dev
4. Open the application

Once the server starts, open your browser and visit:

http://localhost:3000

The application should now be running locally.

----------
Tech Stack
----------

Next.js (App Router)
React
TypeScript
Tailwind CSS
Recharts
Sonner (toast notifications)
Lucide Icons
Shadcn UI (component library)
React Hook Form & Zod for form management

--------
Features
--------

- Track transactions
- Category-based expense tracking
- Budget monitoring
- Analytics dashboard
- Responsive layout
- LocalStorage persistence