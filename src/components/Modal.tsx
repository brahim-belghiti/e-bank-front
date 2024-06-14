import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type TModalProps = {
  title: string;
  dialogTitle: string;
  children?: React.ReactNode;
};

function Modal({ children, title, dialogTitle }: TModalProps) {
  return (
    <>
      <Dialog>
        <DialogTrigger className="bg-red-500 text-white h-full p-2 lg:px-4 rounded-md flex items-center">
          {title}
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogHeader>
            <DialogDescription className="flex gap-2">{children}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Modal;
