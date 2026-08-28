# Deploying the question generator

The apps work without this — they fall back to locally built questions.
Deploying turns on live question generation.

## 1. Create the spend-guard table

In the Supabase SQL editor:

```sql
create table if not exists gen_usage (
  day date primary key,
  count int not null default 0
);
alter table gen_usage enable row level security;
-- No policies needed: the edge function uses the service role key.
```

## 2. Get an Anthropic API key

https://console.anthropic.com → API keys → Create key.

## 3. Deploy

```bash
brew install supabase/tap/supabase
supabase login
supabase link --project-ref ywoaeadxfettakxehsel
supabase secrets set ANTHROPIC_API_KEY=sk-ant-YOUR-KEY-HERE
supabase functions deploy generate-questions --no-verify-jwt
```

`--no-verify-jwt` is required because the page authenticates with the
publishable key, which is not a JWT.

## Settings worth knowing

In `supabase/functions/generate-questions/index.ts`:

- `MODEL` — `claude-opus-5`.
- `DAILY_GENERATION_CAP` — hard ceiling on generations per day (default 80).
  Past the cap the function returns 429 and the apps fall back to local
  questions, so practice still works.
- `MAX_WORDS_PER_CALL` — request size cap (default 12).

## Checking it works

Open an app, start a round, and look for question styles the local
generator cannot produce — Analogy and Odd one out. The Parent tab's
"accuracy by question type" also lists them once they have been answered.

# Practice reminders

Wesley's 6:30pm reminder (email with stats and a daily quote, Web Push to
registered devices, and a parent alert after 2 missed days in a row) is
served by the shared `practice-reminder` edge function, whose source and
migrations live in the word-summit repo. This app's part is `sw.js` plus
the "Remind me at 6:30pm on this device" button, which registers the
browser in the shared `push_subs` table with `student: 'wesley'`.

Test a push without emailing:

```bash
curl -s -X POST "https://ywoaeadxfettakxehsel.supabase.co/functions/v1/practice-reminder?push_test=1&student=wesley"
```
