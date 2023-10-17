// Swagger Docs

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Endpoints related to users.
 */

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user.
 *     tags: [Users]
 *     parameters:
 *       - in: body
 *         name: user
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *         required: true
 *     responses:
 *       201:
 *         description: Return that new user.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Authenticate a user.
 *     tags: [Users]
 *     parameters:
 *       - in: body
 *         name: user
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *         required: true
 *     responses:
 *       200:
 *         description: return the user and the new Token
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /secret:
 *   post:
 *     summary: corroborate the user token
 *     tags: [Users]
 *     parameters:
 *       - in: header
 *         name: authentication
 *         schema:
 *           type: string
 *           properties:
 *             token:
 *               type: string
 *         required: true
 *     responses:
 *       200:
 *         description: return the user
 *       500:
 *         description: Server error.
 */
