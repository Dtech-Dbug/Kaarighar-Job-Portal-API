const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: "First Name is Required",
    },

    lastName: {
      type: String,
      required: "Last Name is Required",
    },

    mobileNumber: {
      type: String,
      required: "Mobile Number is Required",
    },

    password: {
      type: String,
      required: "Password is Required",
    },

    email: String,

    aadharCard: {
      aadharNumber: Number,
      aadharImage: String,
    },

    panCard: {
      panNumber: String,
      panImage: String,
    },

    company: {
      companyName: String,
      companyRegNo: String,
      companyAddress: String,
      companyContact: String,
    },

    address: {
      addressLine1: String,
      addressLine2: String,
      city: String,
      state: String,
      country: String,
      zipCode: String,
      latitude: Number,
      longitude: Number,
    },

    profile: {
      skills: {
        type: Array,
      },

      about: {
        type: String,
      },
      experience: {
        type: Array,
        title: {
          type: String,
          required: true,
        },
        company: {
          type: String,
          required: true,
        },
        location: {
          type: String,
        },
        from: {
          type: Date,
          required: true,
        },
        to: {
          type: Date,
        },
        current: {
          type: Boolean,
          default: false,
        },
        description: {
          type: String,
        },
      },

      education: {
        type: Array,
        school: {
          type: String,
          required: true,
        },
        degree: {
          type: String,
          required: true,
        },
        fieldofstudy: {
          type: String,
          required: true,
        },
        from: {
          type: Date,
          required: true,
        },
        to: {
          type: Date,
        },
        current: {
          type: Boolean,
          default: false,
        },
        description: {
          type: String,
        },
      },
    },

    verified: { type: Boolean, default: false },

    role: {
      type: String,
      enum: ["Admin", "Job Seeker", "Recruiter"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("USER", userSchema);
