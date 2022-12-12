import { Request, Response } from 'express'

import { SurveyUseCase } from '../../application/SurveyUseCase'

export class SurveyController {
  constructor(private surveyUseCase: SurveyUseCase) {}
  
  public postCreateSurvey = async (req: Request, res: Response) => {
    try {
      const { status, message } = await this.surveyUseCase.createSurveyQuestionsAndOptions(req.body)
      res.status(status).json({ status, message })
    } catch (error) {
      const err = error as { status: number, error: string }
      res.status(err.status).json(err)
    }
  }
}