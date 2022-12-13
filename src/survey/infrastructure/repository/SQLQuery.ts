export const selectSurveyByIdQuery = `
  SELECT
    survey.id,
    users.username,
    survey.title,
    survey.description,
    survey.created_at,
    survey.updated_at
  FROM
    survey
  INNER JOIN users
    ON survey.user_id = users.id
  WHERE
    survey.id = $1;
`

export const createSurveyQuery = `
  INSERT INTO
    survey (
      id,
      title,
      description,
      user_id,
      created_at,
      updated_at
    ) VALUES (
      $1,
      $2,
      $3,
      $4,
      $5,
      $6
    );
`

export const updateSurveyQuery = `
  UPDATE survey
  SET
    title = $2,
    description = $3
  WHERE
    id = $1;
`

export const deleteAllSurveysQuery = `
  DELETE FROM
    survey
  WHERE
    id = id;
`
