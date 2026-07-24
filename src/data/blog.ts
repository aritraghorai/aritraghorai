export type BlogPost = {
  title: string;
  date: string;
  platform: string;
  description: string;
  url: string;
};

const blogPosts: BlogPost[] = [
  {
    title: "Building a Real-Time Chat App with Socket.io and React",
    date: "2023",
    platform: "Dev.to",
    description:
      "A deep dive into WebSocket communication patterns, event-driven architecture, and how to manage real-time state in a React application using Socket.io.",
    url: "https://dev.to/aritraghorai",
  },
  {
    title: "Optimizing React Performance: Lessons from Production",
    date: "2023",
    platform: "Dev.to",
    description:
      "Practical techniques for reducing unnecessary re-renders, using React.memo and useMemo effectively, and profiling your application with the React DevTools.",
    url: "https://dev.to/aritraghorai",
  },
  {
    title: "Getting Started with TypeScript in a React Project",
    date: "2022",
    platform: "Dev.to",
    description:
      "A beginner-friendly guide to adding TypeScript to an existing React project, covering common patterns for typing props, state, hooks, and API responses.",
    url: "https://dev.to/aritraghorai",
  },
];

export default blogPosts;
