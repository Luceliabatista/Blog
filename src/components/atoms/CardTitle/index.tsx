import { ICardTitle } from "./types";
import * as styled from "./styles";

export const CardTitle = ({ children }: ICardTitle) =>
    <styled.Title>{children}</styled.Title>;

