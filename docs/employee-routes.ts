// Swagger Docs

/**
 * @swagger
 * tags:
 *   name: Employees
 *   description:  Endpoints related to employees.
 */

/**
 * @swagger
 * /all-employees:
 *   get:
 *     summary: Get a list of all employees.
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: List of employees.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /by/{id}:
 *   get:
 *     summary: Search and return the employee by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Employee ID
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: Return the employee.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /all-by-area:
 *   get:
 *     summary: Get all employees by area.
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: List of employees by area.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /obtain/by/{dni}:
 *   get:
 *     summary: Look for an employee by their ID number.
 *     parameters:
 *       - in: path
 *         name: dni
 *         schema:
 *           type: number
 *         required: true
 *         description: Employee dni number
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: Return that employee
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /new-employee:
 *   post:
 *     summary: Create a new employee.
 *     tags: [Employees]
 *     parameters:
 *       - in: body
 *         name: employee
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             dni:
 *               type: number
 *             birthday:
 *               type: string
 *             description:
 *               type: string
 *             developer:
 *               type: boolean
 *             required: true
 *     responses:
 *       201:
 *         description: Return taht employee.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /edit-employee/{id}:
 *   put:
 *     summary: Edit an employee by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Employee ID
 *       - in: body
 *         name: employee
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             dni:
 *               type: number
 *             birthday:
 *               type: string
 *             description:
 *               type: string
 *             developer:
 *               type: boolean
 *         required: true
 *       - in: body
 *         name: newArea
 *         schema:
 *           type: string
 *         required: true
 *       - in: body
 *         name: oldArea
 *         schema:
 *           type: string
 *         required: true
 *     tags: [Employees]
 *     responses:
 *       201:
 *         description: Return the edited employee
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /delete-employee/{id}:
 *  delete:
 *     summary: Delete an employee by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the employee to delete
 *       - in: body
 *         name: area._id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the area to filter that employee
 *     responses:
 *       204:
 *         description: ""
 *       404:
 *         description: Employee not found.
 *       500:
 *         description: Server error.
 */
