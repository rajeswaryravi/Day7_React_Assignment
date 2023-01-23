
import Accordion from 'react-bootstrap/Accordion';


function StudentAccordian({studentDetails}) {
 
  return (
      <>
     
    <h1>Students Accordian</h1>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{studentDetails[0].name}</Accordion.Header>
        <Accordion.Body>
        <img src={studentDetails[0].image} style={{height:"100px"}}></img>
         <p>ID: {studentDetails[0].id}</p>
         <p>Department: {studentDetails[0].Department}</p>
         <p>Address: {studentDetails[0].Address}</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
      <Accordion.Header>{studentDetails[1].name}</Accordion.Header>
        <Accordion.Body>
        <img src={studentDetails[1].image} style={{height:"100px"}}></img>
         <p>ID: {studentDetails[1].id}</p>
         <p>Department: {studentDetails[1].Department}</p>
         <p>Address: {studentDetails[1].Address}</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
      <Accordion.Header>{studentDetails[2].name}</Accordion.Header>
        <Accordion.Body>
        <img src={studentDetails[2].image} style={{height:"100px"}}></img>
         <p>ID: {studentDetails[2].id}</p>
         <p>Department: {studentDetails[2].Department}</p>
         <p>Address: {studentDetails[2].Address}</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
      <Accordion.Header>{studentDetails[1].name}</Accordion.Header>
        <Accordion.Body>
        <img src={studentDetails[3].image} style={{height:"100px"}}></img>
         <p>ID: {studentDetails[3].id}</p>
         <p>Department: {studentDetails[3].Department}</p>
         <p>Address: {studentDetails[3].Address}</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
      <Accordion.Header>{studentDetails[4].name}</Accordion.Header>
        <Accordion.Body>
        <img src={studentDetails[4].image} style={{height:"100px"}}></img>
         <p>ID: {studentDetails[4].id}</p>
         <p>Department: {studentDetails[4].Department}</p>
         <p>Address: {studentDetails[4].Address}</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  
    </>
  );
}

export default StudentAccordian;