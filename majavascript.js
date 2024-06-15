// majava-script.js

// Base class representing a government role
class GovernmentRole {
    constructor(name) {
        this.name = name;
    }

    performDuties() {
        throw new Error('Subclasses should implement this method');
    }

    report() {
        throw new Error('Subclasses should implement this method');
    }
}

// King class, inheriting from GovernmentRole
class King extends GovernmentRole {
    constructor(name) {
        super(name);
        this.advisors = [];
    }

    appointAdvisor(advisor) {
        this.advisors.push(advisor);
        console.log(`${advisor.name} has been appointed as an advisor to ${this.name}.`);
    }

    removeAdvisor(advisorName) {
        const index = this.advisors.findIndex(advisor => advisor.name === advisorName);
        if (index !== -1) {
            this.advisors.splice(index, 1);
            console.log(`${advisorName} has been removed as an advisor from ${this.name}.`);
        } else {
            console.error(`${advisorName} is not an advisor to ${this.name}.`);
        }
    }

    performDuties() {
        console.log(`${this.name} is ruling the kingdom and overseeing all operations.`);
    }

    report() {
        console.log(`${this.name}'s advisors:`);
        this.advisors.forEach(advisor => console.log(`- ${advisor.name}`));
    }
}

// Mahapatih (Prime Minister) class, inheriting from GovernmentRole
class Mahapatih extends GovernmentRole {
    constructor(name) {
        super(name);
        this.departments = [];
    }

    addDepartment(department) {
        if (!this.departments.includes(department)) {
            this.departments.push(department);
            console.log(`${this.name} is now overseeing the ${department.name} department.`);
        } else {
            console.error(`${this.name} is already overseeing the ${department.name} department.`);
        }
    }

    removeDepartment(departmentName) {
        const index = this.departments.findIndex(department => department.name === departmentName);
        if (index !== -1) {
            this.departments.splice(index, 1);
            console.log(`${departmentName} department has been removed from ${this.name}'s oversight.`);
        } else {
            console.error(`${this.name} is not overseeing the ${departmentName} department.`);
        }
    }

    performDuties() {
        console.log(`${this.name} is coordinating the council and advising the king.`);
    }

    report() {
        console.log(`${this.name}'s departments:`);
        this.departments.forEach(department => console.log(`- ${department.name}`));
    }
}

// Minister class, inheriting from GovernmentRole
class Minister extends GovernmentRole {
    constructor(name, department) {
        super(name);
        this.department = department;
        this.regions = [];
    }

    addRegion(region) {
        if (!this.regions.includes(region)) {
            this.regions.push(region);
            console.log(`${this.name} is now responsible for the ${region.name} region.`);
        } else {
            console.error(`${this.name} is already responsible for the ${region.name} region.`);
        }
    }

    removeRegion(regionName) {
        const index = this.regions.findIndex(region => region.name === regionName);
        if (index !== -1) {
            this.regions.splice(index, 1);
            console.log(`${regionName} region has been removed from ${this.name}'s responsibilities.`);
        } else {
            console.error(`${this.name} is not responsible for the ${regionName} region.`);
        }
    }

    performDuties() {
        console.log(`${this.name} is managing the ${this.department} department.`);
    }

    report() {
        console.log(`${this.name}'s regions:`);
        this.regions.forEach(region => console.log(`- ${region.name}`));
    }
}

// RegionalLeader class, inheriting from GovernmentRole
class RegionalLeader extends GovernmentRole {
    constructor(name, region) {
        super(name);
        this.region = region;
        this.officials = [];
    }

    addOfficial(official) {
        if (!this.officials.includes(official)) {
            this.officials.push(official);
            console.log(`${official.name} has been appointed as an official in ${this.region}.`);
        } else {
            console.error(`${official.name} is already an official in ${this.region}.`);
        }
    }

    removeOfficial(officialName) {
        const index = this.officials.findIndex(official => official.name === officialName);
        if (index !== -1) {
            this.officials.splice(index, 1);
            console.log(`${officialName} has been removed as an official from ${this.region}.`);
        } else {
            console.error(`${officialName} is not an official in ${this.region}.`);
        }
    }

    performDuties() {
        console.log(`${this.name} is governing the ${this.region} region.`);
    }

    report() {
        console.log(`${this.name}'s officials in ${this.region}:`);
        this.officials.forEach(official => console.log(`- ${official.name}`));
    }
}

// Official class, inheriting from GovernmentRole
class Official extends GovernmentRole {
    constructor(name, office) {
        super(name);
        this.office = office;
    }

    performDuties() {
        console.log(`${this.name} is working in the ${this.office} office.`);
    }

    report() {
        console.log(`${this.name} reports from the ${this.office} office.`);
    }
}

// Example usage:
// Create instances
const king = new King("King Hayam Wuruk");
const mahapatih = new Mahapatih("Gajah Mada");
const defenseMinister = new Minister("Arya Wiraraja", "Defense Department");
const financeMinister = new Minister("Rakryan Tumenggung", "Finance Department");
const eastJavaLeader = new RegionalLeader("Raden Wijaya", "East Java");
const westJavaLeader = new RegionalLeader("Sunda", "West Java");
const militaryOfficial = new Official("Senapati", "Military Office");
const taxOfficial = new Official("Arya Damar", "Tax Office");

// Build the government hierarchy
king.appointAdvisor(mahapatih);
mahapatih.addDepartment(defenseMinister);
mahapatih.addDepartment(financeMinister);
defenseMinister.addRegion(eastJavaLeader);
financeMinister.addRegion(westJavaLeader);
eastJavaLeader.addOfficial(militaryOfficial);
westJavaLeader.addOfficial(taxOfficial);

// Simulate duties
king.performDuties();
mahapatih.performDuties();
defenseMinister.performDuties();
financeMinister.performDuties();
eastJavaLeader.performDuties();
westJavaLeader.performDuties();
militaryOfficial.performDuties();
taxOfficial.performDuties();

// Report structure
console.log("\nReport:");
king.report();
mahapatih.report();
defenseMinister.report();
financeMinister.report();
eastJavaLeader.report();
westJavaLeader.report();
militaryOfficial.report();
taxOfficial.report();

// Exporting modules
module.exports = {
    King,
    Mahapatih,
    Minister,
    RegionalLeader,
    Official
};
