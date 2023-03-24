import { ICardBody } from "./types";
import * as styled from "./styles";

export const CardBody = ({ children }: ICardBody) =>
    <styled.Body>{children}</styled.Body>;
    
