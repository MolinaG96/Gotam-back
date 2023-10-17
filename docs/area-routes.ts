// Swagger Docs

/**
 * @swagger
 * tags:
 *   name: Area
 *   description: Endpoints related to areas.
 */

/**
 * @swagger
 * /all-areas:
 *   get:
 *     summary: Retrieve a list of all areas
 *     responses:
 *       200:
 *         description: A list of areas
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /by/:id:
 *   get:
 *     summary: search and return the area
 *     responses:
 *       200:
 *         description: send that area
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /by-employee/:id:
 *   get:
 *     summary: finds and returns the area containing that employee id
 *     responses:
 *       200:
 *         description: send that area
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /obtain/by/:area:
 *   get:
 *     summary: looks for an area containing the name passed by params and returns it
 *     responses:
 *       200:
 *         description: send that area
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /new-area:
 *   post:
 *     summary: create a new area
 *     parameters:
 *       - in: body
 *         name: area
 *         schema:
 *           type: string
 *           properties:
 *             area:
 *               type: string
 *         required: true
 *     responses:
 *       201:
 *         description: send that area created
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /edit:
 *   put:
 *     summary: Edit an area
 *     parameters:
 *       - in: body
 *         name: idArea
 *         area: newArea
 *         employeeId: emmployee for push in this area
 *         schema:
 *           type: object
 *           properties:
 *             areaID:
 *               type: string
 *             areaName:
 *               type: string
 *             employeeId:
 *               type: string
 *         required: true
 *     responses:
 *       201:
 *         description: send that area edited
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /edit-area-name:
 *   put:
 *     summary: Edit an area name
 *     parameters:
 *       - in: body
 *         name: idArea
 *         schema:
 *           type: object
 *           properties:
 *             areaID:
 *               type: string
 *             areaName:
 *               type: string
 *         required: true
 *         description: Object containing areaID (string) and areaName (string)
 *     responses:
 *       201:
 *         description: send that area edited
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /delete/:id:
 *  delete:
 *     summary: Delete an area by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the package to delete
 *     responses:
 *       200:
 *         description: remaining employees in order to eliminate
 *       202:
 *         description: ''
 *       404:
 *         description: Area not found
 *       500:
 *         description: Server error
 */
