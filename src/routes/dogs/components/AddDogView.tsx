import "./AddDogView.scss";
import { useState } from "react";
import Modal from "react-modal";
import { useAppDispatch } from "../../../app/hooks";
import { Dog } from "../../../features/dogs/dogs";
import { addDog } from "../../../features/dogs/dogsSlice";
import { Navigate, useNavigate, useParams } from "react-router-dom";


const AddDogView = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image_link, setImageLink] = useState("");

  const [energy, setEnergy] = useState(0);

  const dispatch = useAppDispatch();

  const [isOpen, setOpen] = useState(false);
  Modal.setAppElement("#root");

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="d-flex">
        <button onClick={openModal} className="btn btn-dark rounded-5 p-3 mx-auto">
          Add New Dog Card
        </button>
      </div>
      <Modal onRequestClose={closeModal} isOpen={isOpen} closeTimeoutMS={500}>
        <div className="d-flex card">
          <h2 className="p-3">Add New Dog Card</h2>
          <button className="btn btn-danger text-light" onClick={closeModal}>
            Close modal
          </button>
        </div>
        <hr />
        image link:
        <input className="rounded-1" value={image_link} onChange={(e) => setImageLink(e.currentTarget.value)} />
        <br />
        <hr />
        name:
        <input className="rounded-1" value={name} onChange={(e) => setName(e.currentTarget.value)} />
        <br />
        description:
        <input
          className="rounded-1"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
        />
        <br />
        energy:
        <input
          className="rounded-1"
          min="0"
          max="500"
          type="number"
          value={energy}
          onChange={(e) => setEnergy(+e.currentTarget.value)}
        />


        <button
          className="btn btn-outline-dark rounded-3"
          onClick={() => {
            const dog: Dog = {
              image_link: image_link,
              name: name,
              description: description,
              energy: energy,
              barking: 0,
              is_visible: true

            };
            dispatch(addDog(dog));
            navigate(-1)
            
          }}
        >
          Add Dog
        </button>
      </Modal>
    </>
  );
};

export default AddDogView;
