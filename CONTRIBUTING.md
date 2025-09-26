# Contributing

## Branching model
- `main`: stable, protected
- `docs/init`: documentation bootstrap
- `feature/*`: feature work (e.g. `feature/import-existing-code`)

## Commit messages
Follow Conventional Commits:
- `docs:`, `feat:`, `fix:`, `chore:`, `refactor:`, `build:`, `ci:`

Examples:
- `docs: add project README and architecture overview`
- `feat(frontend): add product grid component`

## Pull Requests
- Small, focused changes
- Include description, screenshots if UI changes
- Ensure `npm run lint` passes

## Code style
- Keep code readable, meaningful names
- Avoid deep nesting; prefer early returns
- Add tests where meaningful
