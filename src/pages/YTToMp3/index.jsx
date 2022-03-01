import { useRef, useState } from 'react';
import {
  Container,
  Form,
  Button
} from 'react-bootstrap';
import { useGetMp3Query } from '../../store/services/yTToMp3/yTToMp3Api';

// Components
import { Loader } from '../../components';

// Styles
import './YTToMp3.css';


const YTToMp3 = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  const { data, isLoading, isError } = useGetMp3Query(value, {skip: !value});

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(inputRef.current.value);
    inputRef.current.value = '';
  };


  return (
    <div className="py-3">
      <Container>
        <div>
          <Form onSubmit={handleSubmit} className="d-flex align-items-center justify-content-center flex-md-row flex-column">
            <input
              className="video-id-input me-0 me-md-2 mb-md-0 mb-2 form-control text-center"
              placeholder="Video ID"
              ref={inputRef}
            />
            <Button type="submit">Get Download Link</Button>
          </Form>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          isError || data?.status === 'fail' ? (
            <p className="text-danger text-center mt-2">
              Video ID not provided
            </p>
          ) : (
            data && <div className="d-flex flex-column align-items-center justify-content-center mt-2">
              <p className="text-success mb-1"><b>Video:</b> {data.title}</p>
              <a href={data.link} target="_blank" rel="noreferrer">Download here</a>
            </div>
          )
        )}
      </Container>
    </div>
  );
};

export default YTToMp3;