import React from "react";
import { Grid, Row, Column, Tile, Heading,  } from "@carbon/react";

function Lol() {
  return (
    <Grid>
      <Row>
        <Column>
          <Tile style={{ backgroundColor: "#303030", color: "white", padding: "20px" }}>
            <Heading level={2}>LOL Section Content</Heading>
          </Tile>
        </Column>
      </Row>
    </Grid>
  );
}

export default Lol;
