import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddMovie } from "../JS/Action";

function AddMovies() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [posterURL, setPosterURL] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate = useNavigate();

  const handleAdd = () => {
    dispatch(
      AddMovie({
        id: Math.random(),
        title: title,
        description: description,
        posterUrl: posterURL,
        trailer: trailer,
        rate: rating,
      })
    );
    navigate("/");
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Movie Name"
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Movie description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie rate</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Movie rate"
          onChange={(e) => setRating(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie posterURL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Movie posterURL"
          onChange={(e) => setPosterURL(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Trailer URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Movie Trailer URL"
          onChange={(e) => setTrailer(e.target.value)}
        />
      </Form.Group>

      <Button variant="success" onClick={handleAdd}>
        Add
      </Button>
    </Form>
  );
}

export default AddMovies;
