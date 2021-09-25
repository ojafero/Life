# 2021-shellhacks

## Prerequisites
* Node.js & npm
* Yarn
* Python 3.8.0

---

## Development (Linux Environment)
0. Make python virtual environment from `app/api/`
```
python3.8 -m venv venv`
```
2. Source the virtual Python development environent. From the `app` directonry, run
```
source api/venv/bin/activate
```
2. As confirmation, your shell prompt should be prepended with `(venv)` if you are in the virtual environment, like so:
```
(venv) dlu200774@YLHomePC:~/2021-shellhacks/app$
```
3. Install project dependencies
```
cd api/ && pip install -r requirements.txt
```

### Spin up the application
* Navigate to the `app` directory
* API: Run `yarn start-api` in a second terminal window. The server app will be listening on `localhost:5000`
* Frontend: Run `yarn start`. This should launch a browser window at `localhost:3000`.

The servers can continously run and should automatically refresh to reflect any code changes.


