import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
function SendMail() {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail_close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="text"
          ref={register({ required: true })}
        />
        {errors.to && <p className="sendMail_error">To is Required!</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={register({ required: true })}
        />
        {errors.subject && (
          <p className="sendMail_error">Subject is Required!</p>
        )}
        <input
          ref={register({ required: true })}
          name="message"
          placeholder="Message..."
          className="sendMail_message"
          type="text"
        />
        {errors.message && (
          <p className="sendMail_error">Message is Required!</p>
        )}
        <div className="sendMail_options">
          <Button
            className="sendMail_send"
            variant="outlined"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
