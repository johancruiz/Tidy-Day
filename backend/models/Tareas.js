import mongoose from "mongoose";

const tareaSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      trim: true,
      required: true,
    },
    descripcion: {
      type: String,
      trim: true,
      required: true,
    },
    fechaEntrega: {
      type: Date,
      default: Date.now(),
    },
    prioridad: {
      type: String,
      required: true,
      enum: ["Baja", "Media", "Alta"],
    },
    proyecto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Proyecto",
    },
  },
  {
    timestamps: true, 
  }
);

const Tarea = mongoose.model("Tareas", tareaSchema);
export default Tarea;
