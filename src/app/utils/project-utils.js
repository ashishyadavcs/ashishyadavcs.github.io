/**
 * Project data utilities and helpers
 */

/**
 * Filter projects by category
 * @param {Array} projects - Array of project objects
 * @param {string} category - Category to filter by
 * @returns {Array} Filtered projects
 */
export const filterProjectsByCategory = (projects, category) => {
    if (!category || category === "all") return projects;
    return projects.filter(project => project.category?.toLowerCase() === category.toLowerCase());
};

/**
 * Filter projects by technology/skill
 * @param {Array} projects - Array of project objects
 * @param {string} tech - Technology to filter by
 * @returns {Array} Filtered projects
 */
export const filterProjectsByTech = (projects, tech) => {
    return projects.filter(project =>
        project.technologies?.some(technology =>
            technology.toLowerCase().includes(tech.toLowerCase())
        )
    );
};

/**
 * Search projects by title or description
 * @param {Array} projects - Array of project objects
 * @param {string} query - Search query
 * @returns {Array} Filtered projects
 */
export const searchProjects = (projects, query) => {
    if (!query) return projects;

    const searchTerm = query.toLowerCase().trim();
    return projects.filter(
        project =>
            project.title?.toLowerCase().includes(searchTerm) ||
            project.description?.toLowerCase().includes(searchTerm) ||
            project.technologies?.some(tech => tech.toLowerCase().includes(searchTerm))
    );
};

/**
 * Sort projects by date (newest first)
 * @param {Array} projects - Array of project objects
 * @returns {Array} Sorted projects
 */
export const sortProjectsByDate = projects => {
    return [...projects].sort((a, b) => {
        const dateA = new Date(a.date || a.createdAt || 0);
        const dateB = new Date(b.date || b.createdAt || 0);
        return dateB - dateA;
    });
};

/**
 * Get featured projects
 * @param {Array} projects - Array of project objects
 * @param {number} limit - Maximum number of projects to return
 * @returns {Array} Featured projects
 */
export const getFeaturedProjects = (projects, limit = 6) => {
    return projects.filter(project => project.featured === true).slice(0, limit);
};

/**
 * Get unique categories from projects
 * @param {Array} projects - Array of project objects
 * @returns {Array} Unique categories
 */
export const getProjectCategories = projects => {
    const categories = projects
        .map(project => project.category)
        .filter(Boolean)
        .filter((category, index, arr) => arr.indexOf(category) === index);

    return ["all", ...categories];
};

/**
 * Get unique technologies from projects
 * @param {Array} projects - Array of project objects
 * @returns {Array} Unique technologies
 */
export const getProjectTechnologies = projects => {
    const technologies = projects
        .flatMap(project => project.technologies || [])
        .filter((tech, index, arr) => arr.indexOf(tech) === index);

    return technologies.sort();
};

/**
 * Calculate project statistics
 * @param {Array} projects - Array of project objects
 * @returns {Object} Project statistics
 */
export const getProjectStats = projects => {
    return {
        total: projects.length,
        featured: projects.filter(p => p.featured).length,
        categories: getProjectCategories(projects).length - 1, // Exclude 'all'
        technologies: getProjectTechnologies(projects).length,
    };
};

/**
 * Generate project slug from title
 * @param {string} title - Project title
 * @returns {string} URL-friendly slug
 */
export const generateProjectSlug = title => {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
};

/**
 * Find related projects based on shared technologies
 * @param {Object} currentProject - Current project object
 * @param {Array} allProjects - Array of all project objects
 * @param {number} limit - Maximum number of related projects
 * @returns {Array} Related projects
 */
export const getRelatedProjects = (currentProject, allProjects, limit = 3) => {
    if (!currentProject.technologies) return [];

    return allProjects
        .filter(
            project =>
                project.id !== currentProject.id &&
                project.technologies?.some(tech => currentProject.technologies.includes(tech))
        )
        .slice(0, limit);
};
