import React, { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import cookies from "react-cookies";

import {
  Card,
  Input,
  CardBody,
  CardFooter,
  Heading,
  Flex,
  Divider,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";

// imports for modal
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const initialStateData = {
  fullName: "",
  description: "",
  category: "",
  language: "",
  Thumbnail: "",
};
export default function ViewCourse() {
  // Modal State
  const { isOpen, onClose } = useDisclosure();
  const [displayModal, setDisplayModal] = useState(false);
  const [courseID, setCourseID] = useState("");
  const [data, setState] = useState([]);
  useEffect(() => {
    const token = cookies.load("token");
    const url = `${process.env.REACT_APP_SERVER}/root/course`; //http://localhost:5000/root/wishList

    const viewcourse = {
      fullName: data.fullName,
      description: data.description,
      category: data.category,
      language: data.language,
      Thumbnail: data.Thumbnail,
    };
    const bearer = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.get(url, bearer).then((res) => {
      setState(res.data.courses);
    });
  }, []);

  return (
    <Flex>
      {data.length >= 0 &&
        data.map((val, idx) => (
          <Flex key={idx}>
            <Card maxW="sm" key={idx}>
              <CardBody>
                <Stack mt="6" spacing="3">
                  <Heading fontSize="2xl">{val.Thumbnail}</Heading>
                  <Text color="blue.600" fontSize="2xl">
                    {val.fullName}
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    {val.category}
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    {val.language}
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    {val.description}
                  </Text>
                  <Button
                    onClick={() => {
                      setCourseID(val.id);
                      setDisplayModal(true);
                    }}
                  >
                    Add Course
                  </Button>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter></CardFooter>
            </Card>
          </Flex>
        ))}
      {displayModal && (
        <ViewCourseModal
          setDisplayModal={setDisplayModal}
          courseID={courseID}
        />
      )}
    </Flex>
  );
}

const ViewCourseModal = ({ setDisplayModal, courseID }) => {
  const [uploadVideoData, setUploadVideoData] = useState({
    fullName: "",
    Thumbnail: "",
    description: "",
    viedo: null,
  });

  const handleChange = (event) => {
    setUploadVideoData((prev) => ({
      ...prev,
      [event.target.name]:
        event.target.name !== "video"
          ? event.target.value
          : event.target.files[0],
    }));
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("fullName", uploadVideoData.fullName);
    formData.append("Thumbnail", uploadVideoData.Thumbnail);
    formData.append("description", uploadVideoData.description);
    formData.append("viedo", uploadVideoData.viedo);
    formData.append("courseID", courseID);
    console.log(formData)
    console.log(uploadVideoData)

    axios({
        method: 'post',
        url: `${process.env.REACT_APP_SERVER}/root/video/addvideo`,
        data: {
            fullName: uploadVideoData.fullName,
            Thumbnail: uploadVideoData.Thumbnail,
            description: uploadVideoData.description,
            courseID: courseID,
            video: uploadVideoData.video
        },
          headers: {
            Authorization: `Bearer ${cookies.load("token")}`,
            "Content-Type": "multipart/form-data",
          },
        },
      )
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <Modal isOpen={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Video</ModalHeader>
        <ModalBody>
          <Flex w="100%" gap="24px" direction={"column"}>
            <Flex w="100%" gap="8px" direction={"column"}>
              <label>Full name</label>
              <Input
                name="fullName"
                value={uploadVideoData.fullName}
                onChange={handleChange}
              />
            </Flex>
            <Flex w="100%" gap="8px" direction={"column"}>
              <label>Description</label>
              <Input
                name="description"
                value={uploadVideoData.description}
                onChange={handleChange}
              />
            </Flex>
            <Flex w="100%" gap="8px" direction={"column"}>
              <label>Thumbnail</label>
              <Input
                name="Thumbnail"
                value={uploadVideoData.Thumbnail}
                onChange={handleChange}
              />
            </Flex>
            <Flex w="100%" gap="8px" direction={"column"}>
              <label>Upload Video</label>
              <Input
                name="video"
                type={"file"}
                value={uploadVideoData.viedo}
                onChange={handleChange}
              />
            </Flex>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button onClick={handleSubmit}>Save</Button>
          <Button
            variant="ghost"
            onClick={() => {
              setDisplayModal(false);
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
