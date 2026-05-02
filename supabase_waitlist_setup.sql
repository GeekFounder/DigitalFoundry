-- Create the waitlist table if it doesn't exist
CREATE TABLE IF NOT EXISTS waitlist (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create a unique index to prevent duplicate emails
CREATE UNIQUE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist (email);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserts
CREATE POLICY IF NOT EXISTS "Allow public inserts into waitlist"
  ON waitlist FOR INSERT
  TO public
  WITH CHECK (true);

-- Create a policy to allow reads
CREATE POLICY IF NOT EXISTS "Allow public reads from waitlist"
  ON waitlist FOR SELECT
  TO public
  USING (true);