import { CirclePlus } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  ListBox,
  Select,
} from "@heroui/react";

const ASSIGNED_OPTIONS = [
  { id: "alex", name: "Alex Rivera", email: "alex@company.com" },
  { id: "jordan", name: "Jordan Lee", email: "jordan@company.com" },
  { id: "sarah", name: "Sarah Jenkins", email: "sarah@company.com" },
  { id: "taylor", name: "Taylor Wong", emial: "taylor@company.con" },
  { id: "unassigned", name: "None (Unassigned)", email: null },
];
const AddTask = ({ createATask }) => {
  return (
    <Modal>
      <Button variant="secondary">Add a Task</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CirclePlus className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={createATask} className="flex flex-col gap-4">
                  <TextField
                    isRequired
                    className="w-full"
                    name="title"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Title</Label>
                    <Input placeholder="Enter your title" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="description"
                    type="text"
                    variant="secondary"
                    isRequired
                  >
                    <Label>Email</Label>
                    <Input placeholder="Enter your description" />
                  </TextField>

                  {/* status field */}
                  <Select
                    name="status"
                    variant="secondary"
                    className="w-full"
                    placeholder="Select Status"
                    isRequired
                  >
                    <Label>Status</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="inProgress" textValue="In Progress">
                          In Progress
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="todo" textValue="Todo">
                          Todo
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="completed" textValue="Completed">
                          Completed
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  {/* priority field */}
                  <Select
                    name="priority"
                    variant="secondary"
                    className="w-full"
                    placeholder="Select Status"
                    isRequired
                  >
                    <Label>Prority</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="cretical" textValue="Cretical">
                          Cretical
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="medium" textValue="Medium">
                          Medium
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="low" textValue="Low">
                          Low
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>

                    {/* Assigned field */}
                    
                  </Select>

                  {/* Assigned To */}
                  <Select
                    name="assigned"
                    variant="secondary"
                    className="w-full"
                    placeholder="Assigned To "
                    isRequired
                  >
                    <Label>Assigend To</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="taylorWong" textValue="Taylor Wong">
                          Taylor Wong
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="alexRivera" textValue="Alex Rivera">
                          Alex Rivera
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="jordanLee" textValue="Jordan Lee">
                          Jordan Lee
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit">Submit Task</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default AddTask;
