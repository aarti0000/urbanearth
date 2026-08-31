import "dotenv/config";
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL!);

async function main() {
  const result = await sql.unsafe(`
    SELECT
      column_name,
      data_type,
      column_default
    FROM information_schema.columns
    WHERE table_name = 'product'
    ORDER BY ordinal_position;
  `);

  console.log(result);

  await sql.end();
}

main();