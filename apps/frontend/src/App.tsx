import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Activity, BarChart, Users } from 'lucide-react'
import { useEffect, useState } from 'react'

function App() {
  const [selectedStudent, setSelectedStudent] = useState('1')
  const [selectedSemester, setSelectedSemester] = useState('1')
  const [selectedSubject, setSelectedSubject] = useState('math')
  const [students] = useState([{ id: 1, name: 'John Doe' }])

  useEffect(() => {
    const getStudents = async () => {
      // TODO: fetch students list
      // const resData = await fetch('/api/students')
      // const studentsData: Student[] = await resData.json()
      // setStudents(studentsData)
    }

    getStudents()
  }, [])

  const semesters = ['1', '2', '3', '4']
  const subjects = ['math', 'science', 'history', 'literature']

  const getGPA = (option: string) => {
    // Placeholder GPA calculation - in a real app, this would be calculated based on actual grades
    console.log(option)
    return (Math.random() * 2 + 2).toFixed(2)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>

        {/* Filters */}
        <div className="flex space-x-4 mb-6">
          <Select value={selectedStudent} onValueChange={setSelectedStudent}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Student" />
            </SelectTrigger>
            <SelectContent>
              {students?.map((student) => (
                <SelectItem key={student.id} value={student.id.toString()}>
                  {student.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedSemester} onValueChange={setSelectedSemester}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Semester" />
            </SelectTrigger>
            <SelectContent>
              {semesters.map((semester) => (
                <SelectItem key={semester} value={semester}>
                  Semester {semester}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedSubject} onValueChange={setSelectedSubject}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
              {subjects.map((subject) => (
                <SelectItem key={subject} value={subject}>
                  {subject.charAt(0).toUpperCase() + subject.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* GPA Cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overall GPA</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{getGPA('overall')}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Semester GPA
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{getGPA('semester')}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Subject GPA</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{getGPA('subject')}</div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Graphs */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Performance Graphs</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="semester">
              <TabsList>
                <TabsTrigger value="semester">Semester Performance</TabsTrigger>
                <TabsTrigger value="subject">Subject Performance</TabsTrigger>
              </TabsList>
              <TabsContent value="semester">
                <div className="h-[200px] flex items-center justify-center bg-muted">
                  <BarChart className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-2">Semester Performance Chart</span>
                </div>
              </TabsContent>
              <TabsContent value="subject">
                <div className="h-[200px] flex items-center justify-center bg-muted">
                  <BarChart className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-2">Subject Performance Chart</span>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Student Comparison */}
        <Card>
          <CardHeader>
            <CardTitle>Student Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4 mb-4">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Student 1" />
                </SelectTrigger>
                <SelectContent>
                  {students?.map((student) => (
                    <SelectItem key={student.id} value={student.id.toString()}>
                      {student.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Student 2" />
                </SelectTrigger>
                <SelectContent>
                  {students?.map((student) => (
                    <SelectItem key={student.id} value={student.id.toString()}>
                      {student.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="h-[200px] flex items-center justify-center bg-muted">
              <Users className="h-16 w-16 text-muted-foreground" />
              <span className="ml-2">Student Comparison Chart</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
