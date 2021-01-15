import {
  BOMB_2X2,
  BOMB_3X3,
  /* STEP 1 */
  PLANE,
  PLANE_DARK,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  BINOCULARS,
  BINOCULARS_DEEP,
  CAMPGROUND,
  CAMPGROUND_DEEP,
  FIRST_AID,
  FIRST_AID_DEEP,
} from "./FontAwesomeSource";

/*
    2x2
  */

/* The number of Answer: 1 */
const stage1 = [PLANE, PLANE, BOMB_2X2, BOMB_2X2];

/* The number of Answer: 2 */
const stage2 = [PLANE, PLANE, BINOCULARS, BINOCULARS];

const stage3 = [PLANE, PLANE, PLANE_DARK, PLANE_DARK];

const stage4 = [PLANE, PLANE, BINOCULARS_DEEP, BINOCULARS_DEEP];

const stage5 = [PLANE_ARRIVAL, PLANE_ARRIVAL, PLANE_DEPARTURE, PLANE_DEPARTURE];

/*
    3x3
  */

/* The number of Answer: 1 */
const stage6 = [
  PLANE,
  PLANE,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

/* The number of Answer: 2 */
const stage7 = [
  PLANE,
  PLANE,
  BINOCULARS,
  BINOCULARS,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

const stage8 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

const stage9 = [
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

/* The number of Answer: 3 */
const stage10 = [
  PLANE,
  PLANE,
  BINOCULARS,
  BINOCULARS,
  CAMPGROUND,
  CAMPGROUND,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

const stage11 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND,
  CAMPGROUND,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

const stage12 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

const stage13 = [
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

const stage14 = [
  PLANE,
  PLANE,
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

/* The number of Answer: 4 */
const stage15 = [
  PLANE,
  PLANE,
  BINOCULARS,
  BINOCULARS,
  CAMPGROUND,
  CAMPGROUND,
  FIRST_AID,
  FIRST_AID,
  BOMB_3X3,
];

const stage16 = [
  PLANE,
  PLANE,
  BINOCULARS,
  BINOCULARS,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID,
  FIRST_AID,
  BOMB_3X3,
];

const stage17 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID,
  FIRST_AID,
  BOMB_3X3,
];

const stage18 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID_DEEP,
  FIRST_AID_DEEP,
  BOMB_3X3,
];

const stage19 = [
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  CAMPGROUND,
  CAMPGROUND,
  FIRST_AID,
  FIRST_AID,
  BOMB_3X3,
];

const stage20 = [
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID,
  FIRST_AID,
  BOMB_3X3,
];

export default (stage) => {
  if (stage === 1) return stage1;
  else if (stage === 2) return stage2;
  else if (stage === 3) return stage3;
  else if (stage === 4) return stage4;
  else if (stage === 5) return stage5;
  else if (stage === 6) return stage6;
  else if (stage === 7) return stage7;
  else if (stage === 8) return stage8;
  else if (stage === 9) return stage9;
  else if (stage === 10) return stage10;
  else if (stage === 11) return stage11;
  else if (stage === 12) return stage12;
  else if (stage === 13) return stage13;
  else if (stage === 14) return stage14;
  else if (stage === 15) return stage15;
  else if (stage === 16) return stage16;
  else if (stage === 17) return stage17;
  else if (stage === 18) return stage18;
  else if (stage === 19) return stage19;
  else if (stage === 20) return stage20;
};
