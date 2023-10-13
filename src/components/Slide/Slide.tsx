import {
  Button,
  Card,
  CardActions,
  CardContent,
  Fade,
  Typography,
} from "@mui/material";
import { slideDataType } from "~/types/type";

type slideDataIndexType = slideDataType & {
  index: number;
  count: number;
};

export default function Slide(props: slideDataIndexType) {
  const { title, content, index, count } = props;
  return (
    <>
      {count === index ? (
        <Fade in={count === index}>
          <Card sx={{ minWidth: 275, height: "calc(100vh - 150px)" }}>
            <CardContent>
              <Typography sx={{ fontSize: 30 }} gutterBottom>
                {title}
              </Typography>
              <Typography variant="body1">{content}</Typography>
            </CardContent>
          </Card>
        </Fade>
      ) : (
        <></>
      )}
    </>
  );
}
