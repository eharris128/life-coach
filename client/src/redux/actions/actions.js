import fetch from 'isomorphic-fetch';

export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const fetchTasksRequest = () => ({ type: FETCH_TASKS_REQUEST });

export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const fetchTasksSuccess = tasks => ({ type: FETCH_TASKS_SUCCESS, tasks });

export const FETCH_TASKS_ERROR = 'FETCH_TASKS_ERROR';
export const fetchTasksError = error => ({type: FETCH_TASKS_ERROR, error});

export const fetchTasks = () => dispatch => {
  const opts = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
      // 'Access-Control-Allow-Origin': '*'
    },
    method: 'GET'
  };
  dispatch(fetchTasksRequest());
  return fetch('http://localhost:8080/api/tasks', opts)
    .then(res => {
      // console.log('Do we have our res: ', res);
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      return dispatch(fetchTasksSuccess(data));
    })
    .catch(err => {
      return dispatch(fetchTasksError(err));
    })
};
// --------------------------------------------------------------------------------
export const POST_TASK_REQUEST = 'POST_TASK_REQUEST';
export const postTaskRequest = () => ({ type: POST_TASK_REQUEST });

export const POST_TASK_SUCCESS = 'POST_TASK_SUCCESS';
export const postTaskSuccess = task => ({ type: POST_TASK_SUCCESS, task });

export const POST_TASK_ERROR = 'POST_TASK_ERROR';
export const postTaskError = error => ({type: POST_TASK_ERROR, error});

export const postTask = data => dispatch => {
  const opts = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
      // 'Access-Control-Allow-Origin': '*'
    },
    method: 'POST',
    body: JSON.stringify(data)
  };
  dispatch(postTaskRequest());
  return fetch('http://localhost:8080/api/tasks', opts)
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText)
    }
    return res.json();
  })
  .then(data => {
    return dispatch(postTaskSuccess(data));
  })
  .catch(err => {
    dispatch(postTaskError(err));
  })
};

// --------------------------------------------------------------------------------
export const FETCH_MISSION_REQUEST = 'FETCH_MISSION_REQUEST';
export const fetchMissionRequest = () => ({type: FETCH_MISSION_REQUEST});

export const FETCH_MISSION_SUCCESS = 'FETCH_MISSION_SUCCESS';
export const fetchMissionSuccess = mission => ({ type: FETCH_MISSION_SUCCESS, mission });

export const FETCH_MISSION_ERROR = 'FETCH_MISSION_ERROR';
export const fetchMissionError = error => ({type: FETCH_MISSION_ERROR, error});

export const fetchMission = () => dispatch => {
  const opts = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
      // 'Access-Control-Allow-Origin': '*'
    },
    method: 'GET'
  };
  dispatch(fetchMissionRequest());
  return fetch('http://localhost:8080/api/mission', opts)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText)
      }
      return res.json()
    })
    .then(data => {
      return dispatch(fetchMissionSuccess(data))
    })
    .catch(error => {
      return dispatch(fetchMissionError(error))
    })
};
// --------------------------------------------------------------------------------
export const POST_MISSION_REQUEST = 'POST_MISSION_REQUEST';
export const postMissionRequest = () => ({type: POST_MISSION_REQUEST});

export const POST_MISSION_SUCCESS = 'POST_MISSION_SUCCESS';
export const postMissionSuccess = mission => ({type: POST_MISSION_SUCCESS, mission});

export const POST_MISSION_ERROR = 'POST_MISSION_ERROR';
export const postMissionError = () => ({type: POST_MISSION_ERROR});

export const postMission = data => dispatch => {
  const opts = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
      // 'Access-Control-Allow-Origin': '*'
    },
    method: 'POST',
    body: JSON.stringify(data)
  };

  dispatch(postMissionRequest());
  return fetch('http://localhost:8080/api/mission', opts)
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText)
      } 
      return res.json();
    })
    .then(data => {
      return dispatch(postMissionSuccess(data));
    })
    .catch(err => {
      dispatch(postMissionError(err));
    })
};
// --------------------------------------------------------------------------------
export const UPDATE_TASK_REQUEST = 'UPDATE_TASK_REQUEST';
export const updateTaskRequest = () => ({type: UPDATE_TASK_REQUEST});

export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const updateTaskSuccess = task => ({type: UPDATE_TASK_SUCCESS, task});

export const UPDATE_TASK_ERROR = 'UPDATE_TASK_ERROR';
export const updateTaskError = () => ({type: UPDATE_TASK_ERROR});

export const updateTask = data => dispatch => {
    const opts = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
      // 'Access-Control-Allow-Origin': '*'
    },
    method: 'PUT',
    body: JSON.stringify(data)
  };

  dispatch(updateTaskRequest());
  return fetch('http://localhost:8080/api/tasks', opts)
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText)
      } 
      return res.json();
    })
    .then(data => {
      return dispatch(updateTaskSuccess(data));
    })
    .catch(err => {
      dispatch(updateTaskError(err));
    })
};
// --------------------------------------------------------------------------------







