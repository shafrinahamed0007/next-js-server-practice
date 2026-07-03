import { Card, Link } from "@heroui/react";

const TasksCard = ({ task }) => {
  return (
    <Card className="w-full">
      <Card.Header>
        <Card.Title>{task?.title || "Title not found!"}</Card.Title>
        <Card.Description>
          {task?.description || "No description found! "}
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <Link
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href="https://heroui.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Creator Hub
          <Link.Icon aria-hidden="true" />
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default TasksCard;
