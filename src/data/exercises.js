import barbellSquat from "../assets/images/exercise/legs/Barbell-Squat.webp";
import legPress from "../assets/images/exercise/legs/leg-press.webp";
import romanianDeadlift from "../assets/images/exercise/legs/romania-deadlift.webp";
import walkingLunges from "../assets/images/exercise/legs/Walking-Lunges.webp";
import barbellCurl from "../assets/images/exercise/bieceps/Barbell-Curl.webp";
import hammerCurl from "../assets/images/exercise/bieceps/Hammer-Curl.webp";
import inclineDumbbellCurl from "../assets/images/exercise/bieceps/Incline-Dumbbell-Curl.webp";
import preacherCurl from "../assets/images/exercise/bieceps/Preacher-Curl.webp";
import barbellBenchPress from "../assets/images/exercise/chest/Barbell-Bench-Press.webp";
import inclineDumbbellPress from "../assets/images/exercise/chest/Incline-Dumbbell-Press.webp";
import cableFly from "../assets/images/exercise/chest/Cable-Fly.webp";
import pushUps from "../assets/images/exercise/chest/Push-Ups.webp";
import deadlift from "../assets/images/exercise/back/dead-lift.webp";
import latPulldown from "../assets/images/exercise/back/Lat-Pulldown.webp";
import seatedCableRow from "../assets/images/exercise/back/Seated-Cable-Row.webp";
import pullUps from "../assets/images/exercise/back/Pull-Ups.webp";
import overheadPress from "../assets/images/exercise/shoulders/Overhead-Press.webp";
import lateralRaise from "../assets/images/exercise/shoulders/Lateral-Raise.webp";
import frontRaise from "../assets/images/exercise/shoulders/Front-Raise.webp";
import facePull from "../assets/images/exercise/shoulders/Face-Pull.webp";
import tricepPushdown from "../assets/images/exercise/triceps/Tricep-Pushdown.webp";
import skullCrushers from "../assets/images/exercise/triceps/Skull-Crushers.webp";
import closeGripBenchPress from "../assets/images/exercise/triceps/Close-Grip-Bench-Press.webp";
import overheadTricepExtension from "../assets/images/exercise/triceps/Overhead-Tricep-Extension.webp";

const exercises = [
  // ================= LEGS =================

  {
    id: 1,
    category: "Legs",
    name: "Barbell Squat",
    description:
      "A compound lower-body exercise that builds strength in the quads, glutes and hamstrings.",
    muscle: "Quads & Glutes",
    level: "Intermediate",
    sets: "4 Sets",
    reps: "8-12 Reps",
    image: barbellSquat,
  },

  {
    id: 2,
    category: "Legs",
    name: "Leg Press",
    description:
      "A powerful machine exercise designed to develop overall lower-body strength.",
    muscle: "Quads",
    level: "Beginner",
    sets: "4 Sets",
    reps: "10-12 Reps",
    image: legPress,
  },

  {
    id: 3,
    category: "Legs",
    name: "Romanian Deadlift",
    description:
      "A hip-hinge movement that targets the hamstrings and glutes while improving posterior-chain strength.",
    muscle: "Hamstrings",
    level: "Intermediate",
    sets: "3 Sets",
    reps: "8-10 Reps",
    image: romanianDeadlift,
  },

  {
    id: 4,
    category: "Legs",
    name: "Walking Lunges",
    description:
      "A dynamic unilateral exercise that improves leg strength, balance and stability.",
    muscle: "Quads & Glutes",
    level: "Beginner",
    sets: "3 Sets",
    reps: "12-15 Reps",
    image: walkingLunges,
  },


  // ================= BICEPS =================

  {
    id: 5,
    category: "Biceps",
    name: "Barbell Curl",
    description:
      "A classic biceps movement for building arm strength and muscle size.",
    muscle: "Biceps",
    level: "Beginner",
    sets: "4 Sets",
    reps: "8-12 Reps",
    image: barbellCurl,
  },

  {
    id: 6,
    category: "Biceps",
    name: "Hammer Curl",
    description:
      "Build thicker arms by targeting the biceps and brachialis with a neutral grip.",
    muscle: "Biceps",
    level: "Beginner",
    sets: "3 Sets",
    reps: "10-12 Reps",
    image: hammerCurl,
  },

  {
    id: 7,
    category: "Biceps",
    name: "Incline Dumbbell Curl",
    description:
      "An isolation exercise that places the biceps under greater stretch.",
    muscle: "Biceps",
    level: "Intermediate",
    sets: "3 Sets",
    reps: "10-12 Reps",
    image: inclineDumbbellCurl,
  },

  {
    id: 8,
    category: "Biceps",
    name: "Preacher Curl",
    description:
      "A controlled isolation movement that keeps tension focused on the biceps.",
    muscle: "Biceps",
    level: "Intermediate",
    sets: "3 Sets",
    reps: "10-12 Reps",
    image: preacherCurl,
  },


  // ================= CHEST =================

  {
    id: 9,
    category: "Chest",
    name: "Barbell Bench Press",
    description:
      "One of the most effective compound exercises for developing overall chest strength.",
    muscle: "Chest",
    level: "Intermediate",
    sets: "4 Sets",
    reps: "6-10 Reps",
    image: barbellBenchPress,
  },

  {
    id: 10,
    category: "Chest",
    name: "Incline Dumbbell Press",
    description:
      "Targets the upper chest while also working the shoulders and triceps.",
    muscle: "Upper Chest",
    level: "Intermediate",
    sets: "4 Sets",
    reps: "8-12 Reps",
    image: inclineDumbbellPress,
  },

  {
    id: 11,
    category: "Chest",
    name: "Cable Fly",
    description:
      "An isolation movement designed to maintain constant tension throughout the chest.",
    muscle: "Chest",
    level: "Beginner",
    sets: "3 Sets",
    reps: "12-15 Reps",
    image: cableFly,
  },

  {
    id: 12,
    category: "Chest",
    name: "Push Ups",
    description:
      "A bodyweight classic that develops chest, shoulder and triceps strength.",
    muscle: "Chest",
    level: "Beginner",
    sets: "3 Sets",
    reps: "15-20 Reps",
    image: pushUps,
  },


  // ================= BACK =================

  {
    id: 13,
    category: "Back",
    name: "Deadlift",
    description:
      "A full-body compound movement that develops powerful posterior-chain strength.",
    muscle: "Back & Hamstrings",
    level: "Advanced",
    sets: "4 Sets",
    reps: "5-8 Reps",
    image: deadlift,
  },

  {
    id: 14,
    category: "Back",
    name: "Lat Pulldown",
    description:
      "An excellent exercise for developing the lats and building a wider back.",
    muscle: "Lats",
    level: "Beginner",
    sets: "4 Sets",
    reps: "10-12 Reps",
    image: latPulldown,
  },

  {
    id: 15,
    category: "Back",
    name: "Seated Cable Row",
    description:
      "Build back thickness while improving pulling strength and posture.",
    muscle: "Middle Back",
    level: "Beginner",
    sets: "3 Sets",
    reps: "10-12 Reps",
    image: seatedCableRow,
  },

  {
    id: 16,
    category: "Back",
    name: "Pull Ups",
    description:
      "A challenging bodyweight movement that develops lats and upper-back strength.",
    muscle: "Lats",
    level: "Advanced",
    sets: "3 Sets",
    reps: "6-10 Reps",
    image: pullUps,
  },


  // ================= SHOULDERS =================

  {
    id: 17,
    category: "Shoulders",
    name: "Overhead Press",
    description:
      "A compound pressing movement that builds strong and powerful shoulders.",
    muscle: "Shoulders",
    level: "Intermediate",
    sets: "4 Sets",
    reps: "6-10 Reps",
    image: overheadPress,
  },

  {
    id: 18,
    category: "Shoulders",
    name: "Lateral Raise",
    description:
      "An isolation exercise focused on building wider and stronger side delts.",
    muscle: "Side Delts",
    level: "Beginner",
    sets: "3 Sets",
    reps: "12-15 Reps",
    image: lateralRaise,
  },

  {
    id: 19,
    category: "Shoulders",
    name: "Front Raise",
    description:
      "Strengthens the anterior deltoids and improves shoulder control.",
    muscle: "Front Delts",
    level: "Beginner",
    sets: "3 Sets",
    reps: "12-15 Reps",
    image: frontRaise,
  },

  {
    id: 20,
    category: "Shoulders",
    name: "Face Pull",
    description:
      "A great movement for rear delts, upper back and overall shoulder health.",
    muscle: "Rear Delts",
    level: "Beginner",
    sets: "3 Sets",
    reps: "12-15 Reps",
    image: facePull,
  },


  // ================= TRICEPS =================

  {
    id: 21,
    category: "Triceps",
    name: "Tricep Pushdown",
    description:
      "A simple and effective cable exercise for building strong triceps.",
    muscle: "Triceps",
    level: "Beginner",
    sets: "4 Sets",
    reps: "10-15 Reps",
    image: tricepPushdown,
  },

  {
    id: 22,
    category: "Triceps",
    name: "Skull Crushers",
    description:
      "An effective free-weight exercise for increasing triceps strength and size.",
    muscle: "Triceps",
    level: "Intermediate",
    sets: "3 Sets",
    reps: "8-12 Reps",
    image: skullCrushers,
  },

  {
    id: 23,
    category: "Triceps",
    name: "Close Grip Bench Press",
    description:
      "A compound pressing movement that places additional emphasis on the triceps.",
    muscle: "Triceps",
    level: "Intermediate",
    sets: "4 Sets",
    reps: "8-10 Reps",
    image: closeGripBenchPress,
  },

  {
    id: 24,
    category: "Triceps",
    name: "Overhead Tricep Extension",
    description:
      "Targets the long head of the triceps through a deep overhead stretch.",
    muscle: "Triceps",
    level: "Beginner",
    sets: "3 Sets",
    reps: "10-12 Reps",
    image: overheadTricepExtension,
  },
];

export default exercises;
