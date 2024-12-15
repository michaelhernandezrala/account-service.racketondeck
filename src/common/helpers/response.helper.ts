import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import _ from 'lodash-es';

import { ErrorResponse, SuccessResponse } from 'src/common/types/response.helper.types';
import errorCodes from '../constants/error.codes.constants';

/**
 * Helper class to create standardized HTTP response objects.
 * Provides methods for generating success and error responses.
 */
export class ResponseHelper {
  static #instance: ResponseHelper;

  /** Private constructor to enforce singleton pattern. */
  private constructor() {}

  /**
   * Retrieves the singleton instance of the ResponseHelper class.
   * @returns {ResponseHelper} The singleton instance of the ResponseHelper class.
   */
  public static get instance(): ResponseHelper {
    if (!ResponseHelper.#instance) {
      ResponseHelper.#instance = new ResponseHelper();
    }
    return ResponseHelper.#instance;
  }

  /**
   * Creates a successful response with a status code of 200 (OK).
   * @param {Record<string, any>} data - The response data.
   * @param {number} [count] - Optional count of items in the response.
   * @returns {SuccessResponse} The success response object.
   */
  public ok(data: Record<string, any>, count?: number): SuccessResponse {
    const response: SuccessResponse = {
      statusCode: StatusCodes.OK,
      message: ReasonPhrases.OK,
    };

    if (!_.isNil(count)) {
      response.count = count;
    }

    if (!_.isNil(data)) {
      response.data = data;
    }

    return response;
  }

  /**
   * Creates a successful response with a status code of 201 (Created).
   * @param {Record<string, any>} data - The response data.
   * @returns {SuccessResponse} The success response object.
   */
  public created(data: Record<string, any>): SuccessResponse {
    const response: SuccessResponse = {
      statusCode: StatusCodes.CREATED,
      message: ReasonPhrases.CREATED,
      data,
    };

    return response;
  }

  /**
   * Creates an error response with a status code of 400 (Bad Request).
   * @param {string} [message] - Optional custom error message.
   * @param {string} [errorCode] - Optional custom error code.
   * @returns {ErrorResponse} The error response object.
   */
  public badRequest(message?: string, errorCode?: string): ErrorResponse {
    const response: ErrorResponse = {
      statusCode: StatusCodes.BAD_REQUEST,
      message: message ?? ReasonPhrases.BAD_REQUEST,
      errorCode: errorCode ?? errorCodes.BAD_REQUEST,
    };

    return response;
  }

  /**
   * Creates an error response with a status code of 401 (Unauthorized).
   * @param {string} [message] - Optional custom error message.
   * @param {string} [errorCode] - Optional custom error code.
   * @returns {ErrorResponse} The error response object.
   */
  public unauthorized(message?: string, errorCode?: string): ErrorResponse {
    const response: ErrorResponse = {
      statusCode: StatusCodes.UNAUTHORIZED,
      message: message ?? ReasonPhrases.UNAUTHORIZED,
      errorCode: errorCode ?? errorCodes.UNAUTHORIZED,
    };

    return response;
  }

  /**
   * Creates an error response with a status code of 403 (Forbidden).
   * @param {string} [message] - Optional custom error message.
   * @param {string} [errorCode] - Optional custom error code.
   * @returns {ErrorResponse} The error response object.
   */
  public forbidden(message?: string, errorCode?: string): ErrorResponse {
    const response: ErrorResponse = {
      statusCode: StatusCodes.FORBIDDEN,
      message: message ?? ReasonPhrases.FORBIDDEN,
      errorCode: errorCode ?? errorCodes.FORBIDDEN,
    };

    return response;
  }

  /**
   * Creates an error response with a status code of 404 (Not Found).
   * @param {string} [message] - Optional custom error message.
   * @param {string} [errorCode] - Optional custom error code.
   * @returns {ErrorResponse} The error response object.
   */
  public notFound(message?: string, errorCode?: string): ErrorResponse {
    const response: ErrorResponse = {
      statusCode: StatusCodes.NOT_FOUND,
      message: message ?? ReasonPhrases.NOT_FOUND,
      errorCode: errorCode ?? errorCodes.NOT_FOUND,
    };

    return response;
  }

  /**
   * Creates an error response with a status code of 409 (Conflict).
   * @param {string} [message] - Optional custom error message.
   * @param {string} [errorCode] - Optional custom error code.
   * @returns {ErrorResponse} The error response object.
   */
  public conflict(message?: string, errorCode?: string): ErrorResponse {
    const response: ErrorResponse = {
      statusCode: StatusCodes.CONFLICT,
      message: message ?? ReasonPhrases.CONFLICT,
      errorCode: errorCode ?? errorCodes.CONFLICT,
    };

    return response;
  }

  /**
   * Creates an error response with a status code of 500 (Internal Server Error).
   * @param {string} [message] - Optional custom error message.
   * @param {string} [errorCode] - Optional custom error code.
   * @returns {ErrorResponse} The error response object.
   */
  public error(message?: string, errorCode?: string): ErrorResponse {
    const response: ErrorResponse = {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: message ?? ReasonPhrases.INTERNAL_SERVER_ERROR,
      errorCode: errorCode ?? errorCodes.INTERNAL_SERVER_ERROR,
    };

    return response;
  }
}
