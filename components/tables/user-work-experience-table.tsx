import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export const UserWorkExperienceTable = async () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Company Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>End Date</TableHead>
          <TableHead className="w-[100px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* {user.workExperience.map((exp, index) => (
          <TableRow key={index}>
            <TableCell>{exp.companyName}</TableCell>
            <TableCell>{exp.role}</TableCell>
            <TableCell>{exp.startDate}</TableCell>
            <TableCell>{exp.endDate}</TableCell>
            <TableCell>
              <Button
                variant="outline"
                size="sm"
                className="bg-richblack-500 text-white hover:bg-richblack-600"
              >
                Edit
              </Button>
            </TableCell>
          </TableRow>
        ))} */}
      </TableBody>
    </Table>
  );
};
