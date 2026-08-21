# 🛑 STOP — READ THIS BEFORE ANY DEPLOY, PUSH, OR CLOUD CLI COMMAND

Ben has **two separate identities** across GitHub and Vercel: `benyoung` (this repo — personal portfolio) and `cernago` / Bookbag (his other work). They must **never** cross. Deploying benyoung code to a Cernago Vercel account (or vice versa) is a serious mistake that has already happened once.

**Do not rely on Ben to remember which account is active.** He explicitly asked that this check never depend on him. It is entirely your job as the assistant to verify before every relevant command.

## Required accounts for this repo

| Tool     | Expected identity                       | How to verify                                  |
|----------|-----------------------------------------|------------------------------------------------|
| Vercel   | user `ben-2049`, active team `benyoung` | `vercel whoami`                                |
| GitHub   | `benyoung-repos`                        | `gh auth status`                               |

## Mandatory pre-flight — no exceptions

**Before running ANY `vercel ...` command in this repo** (including `vercel deploy`, `vercel link`, `vercel env ...`, `vercel domains ...`, `vercel project ...`, `vercel remove`, etc.):

1. Run `vercel whoami`.
2. Output must be exactly `Logged in as ben-2049` with `Active team: benyoung`.
3. If it says anything else (including `tech-6450`, or any Cernago-related team), **STOP**. Do not run the intended command. Tell Ben:

   > Vercel CLI is currently logged in as `<whoever>`. This repo requires `ben-2049`. Please run:
   > ```
   > vercel logout
   > vercel login
   > ```
   > and log in with `ben@benyoung.me`. Then run `vercel whoami` and paste the output back to me.

4. Only after `vercel whoami` returns the correct identity may you proceed with the intended command.

**Before running ANY `gh ...` command or `git push` in this repo:**

1. Run `gh auth status`.
2. Output must include `Logged in to github.com account benyoung-repos` and mark it as the active account.
3. If it shows `cernago` or any other account as active, **STOP**. Tell Ben:

   > GitHub CLI is currently active as `<whoever>`. This repo requires `benyoung-repos`. Please run:
   > ```
   > gh auth switch --user benyoung-repos
   > ```
   > (or `gh auth login` if `benyoung-repos` isn't in the account list). Then run `gh auth status` and paste the output back.

4. Only after `gh auth status` confirms the correct identity may you proceed.

## SSH identity: the third crossing point

Vercel and `gh` are not the only ways the accounts can cross. Git
pushes over SSH pick an identity from `~/.ssh/config`, and that is
invisible in the Sourcetree UI.

Both accounts use github.com, so they are separated by **host alias**,
each locked to its own key with `IdentitiesOnly yes`:

| Alias in `~/.ssh/config` | Key                          | Account          | Used by                  |
|--------------------------|------------------------------|------------------|--------------------------|
| `github.com`             | `~/.ssh/cernagoben-Bitbucket`| `cernago`        | Bookbag mirror push only |
| `github-benyoung`        | `~/.ssh/benyoung-github`     | `benyoung-repos` | This repo                |

**This repo's `origin` must always be:**

```
ssh://git@github-benyoung/benyoung-repos/benyoung.git
```

If it ever reads `github.com` instead, pushes authenticate as `cernago`
and GitHub rejects them with `Permission denied to cernago`. Sourcetree
has silently reintroduced a `pushurl` pointing at plain `github.com`
once already. To check and repair:

```
git remote -v
git config --get remote.origin.pushurl   # must print nothing
ssh -T git@github-benyoung               # must say "Hi benyoung-repos!"
```

## Commit author identity

This repo sets `user.email` **locally** to `ben@benyoung.me`. The global
git identity on this machine is `tech@cernago.com`, so a repo without
the local override silently publishes the Cernago email in every commit
on a public personal repo. That happened here: 69 commits were rewritten
to `ben@benyoung.me` on 2026-08-21.

Verify before committing:

```
git config --local user.email   # must be ben@benyoung.me
```

Never push tags from this repo without checking where they point.
Sourcetree pushes with `--tags`, so a stray tag on a pre-rewrite commit
would republish the old Cernago-authored history.

## Why this exists

`ben-2049` (email `ben@benyoung.me`) and `tech-6450` / `cernago` (email `tech@cernago.com`) are deliberately kept as separate Vercel accounts so that benyoung.me has zero shared login, billing, or team overlap with Cernago work. The same separation applies on GitHub between `benyoung-repos` and `cernago`. A cross-account mistake means either:

- Deploying benyoung code into a Cernago project (leaks personal work into Cernago's org, wrong billing, wrong access controls), or
- Deploying Cernago code into benyoung (leaks Cernago work into a public personal account).

Both are bad. Both have already happened once during initial setup (see git history around 2026-07-25). This guard is the fix.

## Do not weaken or remove these rules

If a future task asks you to move, condense, or "clean up" this section: **do not**, unless Ben explicitly names this section and confirms he wants it changed. This document's job is to catch mistakes that Ben has explicitly said he cannot be expected to catch himself.

---

# Development

**Do not start the dev server yourself.** Ben runs `npm run dev` in
his own terminal so he sees the live build output and can catch
errors as they happen. If you need to verify a change against a
running server, first check whether one is up (`curl -sS -o
/dev/null -w "%{http_code}\n" http://localhost:4321/`). If port 4321
returns nothing, ask Ben to start `npm run dev` before you verify.
Never start the server in `--background` mode — Ben prefers
visibility into the process.

# Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
