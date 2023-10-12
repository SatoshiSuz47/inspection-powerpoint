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
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {title}
              </Typography>
              <Typography variant="h5" component="div">
                be
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Fade>
      ) : (
        <></>
      )}
    </>
  );
}
