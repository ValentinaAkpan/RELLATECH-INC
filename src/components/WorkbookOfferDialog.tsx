import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const WorkbookOfferDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeenOffer = localStorage.getItem("hasSeenWorkbookOffer");
    if (!hasSeenOffer) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("hasSeenWorkbookOffer", "true");
    setOpen(false);
  };

  const handleDownload = () => {
    window.open("/The-Clarity-Reset-Workbook.pdf", "_blank");
    handleClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Free Download</DialogTitle>
          <DialogDescription className="text-base pt-2">
            Get your free copy of <strong>The Clarity Reset Workbook</strong> - 
            a practical guide to help you organize your thoughts and streamline your workflow.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 pt-4">
          <Button onClick={handleDownload} size="lg" className="w-full">
            <Download className="mr-2 h-5 w-5" />
            Download Workbook
          </Button>
          <Button onClick={handleClose} variant="outline" size="lg" className="w-full">
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
