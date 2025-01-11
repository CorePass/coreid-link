export interface OGImageProps {
  ogTitle: string;
  ogSubtitle: string;
}

export const OG_COLOR_MAPPING = {
  "Connect to Core ID via CorePass": {
    backgroundColor: "#61A5FA",
    color: "#1C3B8B",
  },
  "Missing Core ID": {
    backgroundColor: "#FB943C",
    color: "#7D2E12",
  },
  "Invalid Core ID": {
    backgroundColor: "#F77170",
    color: "#7F1E1D",
  },
  default: {
    backgroundColor: "#61A5FA",
    color: "#1C3B8B",
  },
} as const;
