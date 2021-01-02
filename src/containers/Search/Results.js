import Card from "components/Card";
import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
   
  > div {
    flex: 1;
    width: 50%;
  }
`;

const Results = ({ results }) => {
  return (
    <Grid>
      {results.map((item) => (
        <Card className="hoverable expand" key={item.id}>
          <Card.Thumbnail>
            <img
              src="https://miro.medium.com/max/1000/1*gMNBpemogJicc0Q1NNWDug.jpeg"
              alt={item.short_description}
            />
          </Card.Thumbnail>

          <Card.Content>
            <h3>{item.title}</h3>

            <h4>{item.owner.first_name}</h4>

            <p>{item.short_description}</p>
          </Card.Content>
        </Card>
      ))}
    </Grid>
  );
};

export default Results;
