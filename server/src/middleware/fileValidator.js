export const validateFileUpload = (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ message: "Evidence file is required" });
  }

  const allowed = ["image/jpeg", "image/png", "application/pdf"];
  if (!allowed.includes(req.file.mimetype)) {
    return res.status(400).json({ message: "Invalid file type" });
  }

  // Cloudinary already limits size, but we double-check
  if (req.file.size && req.file.size > 5 * 1024 * 1024) {
    return res.status(400).json({ message: "File too large (max 5MB)" });
  }

  next();
};
