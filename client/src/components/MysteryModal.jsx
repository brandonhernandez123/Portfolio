import React from "react";
import { Modal, Button } from "react-bootstrap";

const MysteryModal = (props) => {
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            Murder Mystery JS
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Murder Mystery JS</h4>
          <img src='https://imgur.com/a/yC1Vp6P' alt="murdermyster.js" />
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}


export default MysteryModal