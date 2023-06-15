import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import React, {useState} from "react";
import {Button} from "@mui/material";

/** Current template demonstrates how you can define a react component by the velocity parameter properties.
 * To see the result of the processed template try to drag and drop it from React palette (Templates -> Dialog) to {@link DialogTestComponent} div element.
 * For more information follow https://youtrack.haulmont.com/issue/RCB-474/Dialog-app-template-support
 **/
export const ModalDialogTemplate = () => {
  const [isOpen, setIsOpen] = useState(false);
  /*vtl const maxWidth = $quote${dialog.maxWidth}$quote*/
  /*vtl const position = $quote${dialog.position}$quote*/
  /*vtl const isFullScreen = $quote${dialog.fullScreen}$quote*/
  /*vtl const isFullWidth = $quote${dialog.fullWidth}$quote*/

  return (
    <Dialog
      open={isOpen}
      PaperProps={{
        sx: {
          position: "fixed",
          m: 0,
          top: 10,
          left: 10
        }
      }}
    >
      <DialogTitle>
        {/*vtl $dialog.title*/}
      </DialogTitle>
      <DialogContent>
        {/*vtl $dialog.content*/}
      </DialogContent>

      <DialogActions>
        {/*vtl #foreach($action in $dialog.actions)*/}
        <Button>
          {/*vtl ${action.label}*/}
        </Button>
        {/*vtl #end*/}
      </DialogActions>
    </Dialog>
  );
};

export const DialogTestComponent = () => {
  return (
    <div></div>
  );
};
