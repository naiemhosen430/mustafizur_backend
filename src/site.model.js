import { model, Schema } from "mongoose";

const siteSchema = Schema({
  sitename: {
    type: String,
    required: true,
    default: "not set",
  },
  email: {
    type: String,
    required: true,
    default: "info@iconicdigitalacademy.com",
  },
  password: {
    type: String,
    required: true,
    default: "01907239952@",
  },
  phone: {
    type: String,
    required: true,
    default: "not set",
  },
  aboutus: {
    type: String,
    required: true,
    default: "not set",
  },
  heroheading: {
    type: String,
    required: true,
    default: "not set",
  },
  herodes: {
    type: String,
    required: true,
    default: "not set",
  },
  aboutus: {
    type: String,
    required: true,
    default: "not set",
  },
  pcdes: {
    type: String,
    required: true,
    default: "not set",
  },
  cdes: {
    type: String,
    required: true,
    default: "not set",
  },
  peackagelist: {
    type: Array,
    required: true,
    default: [],
  },
  studentpassed: {
    type: Number,
    required: true,
    default: 0,
  },
  students: {
    type: Number,
    required: true,
    default: 0,
  },
  instructors: {
    type: Number,
    required: true,
    default: 0,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  review: {
    type: Array,
    required: true,
    default: [],
  },
  blog: {
    type: Array,
    required: true,
    default: [],
  },
  sponserds: {
    type: Array,
    required: true,
    default: [],
  },
  courses: {
    type: Array,
    required: true,
    default: [],
  },
  ownername: {
    type: String,
    required: true,
    default: "not set",
  },
  ownerdes: {
    type: String,
    required: true,
    default: "not set",
  },
});

const siteModel = model("siteinfo", siteSchema);
export default siteModel;
