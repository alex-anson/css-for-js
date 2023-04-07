// Local
import ButtonLevels from "@/compositions/buttonModule3/ButtonLevels";
import { Table } from "./ButtonTable";
import styled from "styled-components";

export function ButtonLevelsTable() {
  return (
    <section>
      <h2>button composition - levels</h2>
      <Wrapper>
        <Table cellSpacing={0} cellPadding={0}>
          <thead>
            <tr>
              <th>🚦</th>
              <th>Medium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Info</td>
              <td>
                <ButtonLevels level="info" size="medium">
                  Button
                </ButtonLevels>
              </td>
            </tr>
            <tr>
              <td>Success</td>
              <td>
                <ButtonLevels level="success" size="medium">
                  Button
                </ButtonLevels>
              </td>
            </tr>
            <tr>
              <td>Warn</td>
              <td>
                <ButtonLevels level="warn" size="medium">
                  Button
                </ButtonLevels>
              </td>
            </tr>
            <tr>
              <td>Danger</td>
              <td>
                <ButtonLevels level="danger" size="medium">
                  Button
                </ButtonLevels>
              </td>
            </tr>
          </tbody>
        </Table>
      </Wrapper>
    </section>
  );
}

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  max-width: fit-content;
`;
