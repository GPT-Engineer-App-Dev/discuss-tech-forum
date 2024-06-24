import { useState } from "react";
import { Container, VStack, Heading, Box, Text, Button, Input, Textarea } from "@chakra-ui/react";

const Forum = () => {
  const [topics, setTopics] = useState([
    { id: 1, title: "React vs Vue", content: "What are your thoughts on React vs Vue?", replies: [] },
    { id: 2, title: "Best practices for API design", content: "Let's discuss best practices for designing RESTful APIs.", replies: [] },
  ]);

  const [newTopic, setNewTopic] = useState({ title: "", content: "" });

  const handleNewTopic = () => {
    if (newTopic.title && newTopic.content) {
      setTopics([...topics, { id: topics.length + 1, ...newTopic, replies: [] }]);
      setNewTopic({ title: "", content: "" });
    }
  };

  const handleReply = (topicId, replyContent) => {
    setTopics(topics.map(topic => 
      topic.id === topicId 
        ? { ...topic, replies: [...topic.replies, replyContent] }
        : topic
    ));
  };

  return (
    <Container maxW="container.xl" mt={8}>
      <VStack spacing={8} align="stretch">
        <Heading>Tech Discussion Forum</Heading>
        
        <Box>
          <Heading size="md" mb={4}>Create New Topic</Heading>
          <Input 
            placeholder="Topic Title" 
            value={newTopic.title} 
            onChange={(e) => setNewTopic({...newTopic, title: e.target.value})}
            mb={2}
          />
          <Textarea 
            placeholder="Topic Content" 
            value={newTopic.content} 
            onChange={(e) => setNewTopic({...newTopic, content: e.target.value})}
            mb={2}
          />
          <Button onClick={handleNewTopic} colorScheme="teal">Post New Topic</Button>
        </Box>

        {topics.map((topic) => (
          <Box key={topic.id} borderWidth={1} borderRadius="lg" p={4}>
            <Heading size="md">{topic.title}</Heading>
            <Text mt={2}>{topic.content}</Text>
            <Text mt={2} fontWeight="bold">Replies:</Text>
            {topic.replies.map((reply, index) => (
              <Text key={index} ml={4}>{reply}</Text>
            ))}
            <Input 
              placeholder="Your reply" 
              mt={2}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleReply(topic.id, e.target.value);
                  e.target.value = '';
                }
              }}
            />
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Forum;