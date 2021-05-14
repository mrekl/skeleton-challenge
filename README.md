# skeleton-challenge
Test task
## How to set up and run the project
### Development mode
```
yarn
yarn dev
```

## Endpoints
| route          | methods | body                   | description                          |
|----------------|---------|------------------------|--------------------------------------|
| /auth/login    | post    | email, password        | Allows user to login                 |
| /auth/register | post    | email, password        | Allows user to register              |
| /auth/reset    | post    | email                  | Request to reset password            |
| /auth/reset    | patch   | email, password, token | Set new password                     |
| /companies     | post    | name, address          | Creates new company                  |
| /companies     | get     |                        | Gets all companies                   |
| /companies/:id | get     |                        | Gets single company, specified by id |
| /companies/id  | patch   | name, address          | Updates company, specified by id     |
| /companies/id  | delete  |                        | Removes company, specified by id     |
